<?php

namespace App\Repository;

use App\Entity\Motifappel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Motifappel|null find($id, $lockMode = null, $lockVersion = null)
 * @method Motifappel|null findOneBy(array $criteria, array $orderBy = null)
 * @method Motifappel[]    findAll()
 * @method Motifappel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MotifappelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Motifappel::class);
    }

    // /**
    //  * @return Motifappel[] Returns an array of Motifappel objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Motifappel
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
