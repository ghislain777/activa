<?php

namespace App\Repository;

use App\Entity\Categoriecontact;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Categoriecontact|null find($id, $lockMode = null, $lockVersion = null)
 * @method Categoriecontact|null findOneBy(array $criteria, array $orderBy = null)
 * @method Categoriecontact[]    findAll()
 * @method Categoriecontact[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoriecontactRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Categoriecontact::class);
    }

    // /**
    //  * @return Categoriecontact[] Returns an array of Categoriecontact objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Categoriecontact
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
